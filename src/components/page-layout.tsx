'use client';
import 'client-only';
import { MixedSizes, Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export default function PageLayout({ defaultLayout }: { defaultLayout: MixedSizes[] }) {
  const onLayout = (sizes: MixedSizes[]) => {
    document.cookie = `page:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup direction="horizontal" onLayout={onLayout}>
      <Panel
        order={0}
        className="bg-slate-100 rounded-lg flex items-center justify-center text-center"
        defaultSizePercentage={defaultLayout[0].sizePercentage}
        maxSizePixels={180}
        minSizePixels={50}
      >
        Left panel
      </Panel>
      <PanelResizeHandle className="w-1 bg-slate-300" />
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
