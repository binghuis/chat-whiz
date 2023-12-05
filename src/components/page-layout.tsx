'use client';

import { MixedSizes, Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export default function PageLayout({ defaultLayout }: { defaultLayout: MixedSizes[] }) {
  const onLayout = (sizes: MixedSizes[]) => {
    document.cookie = `page:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup direction="horizontal" onLayout={onLayout}>
      <Panel
        className="bg-slate-100 rounded-lg flex items-center justify-center text-center p-1"
        defaultSizePercentage={defaultLayout[0].sizePercentage}
        minSizePixels={20}
      >
        Left panel
      </Panel>
      <PanelResizeHandle className="mx-1 w-1 bg-slate-300" />
      <Panel
        className="bg-slate-100 rounded-lg flex items-center justify-center text-center p-1"
        defaultSizePercentage={defaultLayout[1].sizePercentage}
      >
        Right panel
      </Panel>
    </PanelGroup>
  );
}
