import {ReactFlow} from "@xyflow/react";
import React from 'react';


import '@xyflow/react/dist/style.css';

let initialNodes: any[]  = [];
let initialEdges: any[] = [];

function generateNodeId(index: number) {
    return `node-${index}`;
}

// Function to generate nodes and edges
function generateNodesAndEdges(count: number) {
    // Generate nodes
    for (let i = 1; i <= count; i++) {
        const nodeId = generateNodeId(i);
        const newNode = {
            id: nodeId,
            width: 300, height: 100,
            position: { x: 0, y: i * 120 }, // Adjust y position according to index
            data: { label: nodeId } // Labeling nodes with their IDs
        };
        initialNodes.push(newNode);

        // Generate edges (connecting to the previous node)
        if (i > 1) {
            const edgeId = `e${i - 1}-${i}`;
            const newEdge = {
                id: edgeId,
                source: generateNodeId(i - 1),
                target: nodeId
            };
            initialEdges.push(newEdge);
        }
    }
}

// Call the function to generate nodes and edges
generateNodesAndEdges(200); // Generate 100 nodes

export default function Home() {
  return (
    <main>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
    </main>
  );
}
