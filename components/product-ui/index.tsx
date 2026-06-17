import { DashboardMock } from "./DashboardMock";
import { AgentQMock } from "./AgentQMock";
import { HumansAIMock } from "./HumansAIMock";
import { ProfilingMock } from "./ProfilingMock";
import { MonitoringMock } from "./MonitoringMock";
import { SignalsMock } from "./SignalsMock";

export type ProductMockType =
  | "profiling"
  | "dashboard"
  | "monitoring"
  | "agentq"
  | "humans-ai"
  | "signals";

const MOCK_MAP: Record<ProductMockType, React.ComponentType> = {
  profiling: ProfilingMock,
  dashboard: DashboardMock,
  monitoring: MonitoringMock,
  agentq: AgentQMock,
  "humans-ai": HumansAIMock,
  signals: SignalsMock,
};

export function ProductMock({ type }: { type: ProductMockType }) {
  const Component = MOCK_MAP[type];
  return (
    <div className="[perspective:1200px]">
      <div className="rounded-2xl border border-base-border shadow-card-hover transition-transform duration-500 hover:[transform:rotateX(0deg)] [transform:rotateX(3deg)]">
        <Component />
      </div>
    </div>
  );
}
