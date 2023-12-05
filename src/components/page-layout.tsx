'use client';
import { ResizeHorizontalIcon } from '@src/icons/resize-horizontal';
import 'client-only';
import { MixedSizes, Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export default function PageLayout({ defaultLayout }: { defaultLayout: MixedSizes[] }) {
  const onLayout = (sizes: MixedSizes[]) => {
    document.cookie = `page:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup direction="horizontal" onLayout={onLayout} storage={localStorage}>
      <Panel
        order={0}
        collapsible
        className="bg-slate-100 rounded-lg flex items-center justify-center text-center"
        defaultSizePercentage={defaultLayout[0].sizePercentage}
        maxSizePixels={180}
        minSizePixels={50}
      >
        Left panel
      </Panel>
      <PanelResizeHandle>
        <ResizeHorizontalIcon />
      </PanelResizeHandle>
      <Panel
        order={1}
        className="bg-slate-100 rounded-lg flex items-center justify-center text-center"
        defaultSizePercentage={defaultLayout[1].sizePercentage}
      >
        Right panel
      </Panel>
    </PanelGroup>
  );
}
