import { SafeHtml } from '@angular/platform-browser';
import { GraphLink, GraphNode } from './force-directed-graph.models';
import { HierarchyNode } from './hierarchy-node';
import { UpsetPlot } from './upset-data';

export class GraphData {
  message?: string | undefined;
  image?: SafeHtml;
  values?: HierarchyNode[];
  graph?: {
    nodes: GraphNode[];
    links: GraphLink[];
  };
  plot?: UpsetPlot;
}
