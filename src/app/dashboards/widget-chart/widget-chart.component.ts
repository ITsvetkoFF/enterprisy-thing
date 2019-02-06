import {AfterViewInit, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';

import { data as graph } from "./data/miserables"

@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WidgetChartComponent implements AfterViewInit {

  public height = 250;
  public width = 400;

  @ViewChild('ThisGuy') canvas: any;

  constructor() {
  }

  ngAfterViewInit() {
    let canvas = this.canvas.nativeElement;
    let context = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;

    let simulation = d3.forceSimulation()
      .force('link', d3.forceLink().id(function (d: any) {
        return d.id;
      }))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2));

      simulation
        .nodes(graph.nodes)
        .on('tick', ticked);

    (simulation.force('link') as any).links(graph.links);

      d3.select(canvas)
        .call(d3.drag()
          .container(canvas)
          .subject(dragsubject)
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended));

      function ticked() {
        context.clearRect(0, 0, width, height);

        context.beginPath();
        graph.links.forEach(drawLink);
        context.strokeStyle = '#aaa';
        context.stroke();

        context.beginPath();
        graph.nodes.forEach(drawNode);
        context.fill();
        context.strokeStyle = '#fff';
        context.stroke();
      }

      function dragsubject() {
        return simulation.find(d3.event.x, d3.event.y);
      }

    function dragstarted() {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d3.event.subject.fx = d3.event.subject.x;
      d3.event.subject.fy = d3.event.subject.y;
    }

    function dragged() {
      d3.event.subject.fx = d3.event.x;
      d3.event.subject.fy = d3.event.y;
    }

    function dragended() {
      if (!d3.event.active) simulation.alphaTarget(0);
      d3.event.subject.fx = null;
      d3.event.subject.fy = null;
    }

    function drawLink(d) {
      context.moveTo(d.source.x, d.source.y);
      context.lineTo(d.target.x, d.target.y);
    }

    function drawNode(d) {
      context.moveTo(d.x + 3, d.y);
      context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
    }
  }

}
