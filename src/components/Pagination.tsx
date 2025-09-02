const NavButton = ({
  label,
  enabled,
  onClick,
}: {
  label: string;
  enabled: boolean;
  onClick: () => void;
}) => (
  <button
    className="m-2 rounded bg-gray-300 px-3 pb-1 text-lg enabled:cursor-pointer enabled:hover:bg-gray-500 enabled:hover:text-white disabled:opacity-25"
    onClick={onClick}
    disabled={!enabled}
  >
    {label}
  </button>
);

export const Pagination = ({
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}: {
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}) => {
  return (
    <div className="flex justify-center">
      <NavButton label="Back" enabled={hasPrev} onClick={onPrev} />
      <NavButton label="Next" enabled={hasNext} onClick={onNext} />
    </div>
  );
};
