export default function Loading() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[200] h-px overflow-hidden bg-border-subdued"
    >
      <div className="h-full w-1/3 animate-[loading-bar_1.1s_ease-in-out_infinite] bg-action-primary" />
    </div>
  );
}
