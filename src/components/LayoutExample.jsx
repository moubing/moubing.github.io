import { Panel, PanelResizeHandle, PanelGroup } from "react-resizable-panels";

export function LayoutExample() {
  return (
    <div className="exam">
      <PanelGroup direction="vertical">
        <Panel defaultSize={15} className="panel">
          head
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={75}>
          <PanelGroup direction="horizontal">
            <Panel defaultSize={20} className="panel">
              layer
            </Panel>
            <PanelResizeHandle />
            <Panel defaultSize={60}>
              <PanelGroup direction="vertical">
                <Panel defaultSize={80} className="panel">
                  map
                </Panel>
                <PanelResizeHandle />
                <Panel defaultSize={20} className="panel">
                  log
                </Panel>
              </PanelGroup>
            </Panel>
            <PanelResizeHandle />
            <Panel defaultSize={20} className="panel">
              tool
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={10} className="panel">
          foot
        </Panel>
      </PanelGroup>
    </div>
  );
}
