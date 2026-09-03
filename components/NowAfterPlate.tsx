interface NowAfterPlateProps {
  now: string[];
  after: string[];
  nowLabel?: string;
  afterLabel?: string;
}

const PANEL_X_LEFT = 50;
const PANEL_X_RIGHT = 850;
const PANEL_WIDTH = 700;
const PANEL_Y = 160;
const PANEL_HEIGHT = 560;
const PANEL_RX = 12;
const LABEL_Y = 215;
const ITEM_START_Y = 290;
const ITEM_SPACING = 120;
const ITEM_X_LEFT = 80;
const ITEM_X_RIGHT = 880;
const ITEM_FONT_SIZE = 17;
const LABEL_FONT_SIZE = 22;
const ARROW_Y = 410;

export function NowAfterPlate({
  now,
  after,
  nowLabel = 'NOW',
  afterLabel = 'AFTER',
}: NowAfterPlateProps) {
  return (
    <>
      {/* ── NOW panel ─────────────────────────────────────── */}
      <rect
        x={PANEL_X_LEFT} y={PANEL_Y}
        width={PANEL_WIDTH} height={PANEL_HEIGHT} rx={PANEL_RX}
        fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
        stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)"
        strokeWidth="1.5"
      />
      <text
        x={ITEM_X_LEFT} y={LABEL_Y}
        fontFamily="var(--do-font-heading)" fontWeight="700"
        fontSize={LABEL_FONT_SIZE} fill="var(--do-amber)"
        letterSpacing="0.06em"
      >
        {nowLabel}
      </text>
      <g
        fontFamily="var(--do-font-body)" fontSize={ITEM_FONT_SIZE}
        fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)"
      >
        {now.map((item, i) => (
          <text key={i} x={ITEM_X_LEFT} y={ITEM_START_Y + i * ITEM_SPACING}>
            <tspan fill="var(--do-amber)" fontWeight="700">&#x2715;</tspan>
            <tspan dx="14">{item}</tspan>
          </text>
        ))}
      </g>

      {/* ── AFTER panel ───────────────────────────────────── */}
      <rect
        x={PANEL_X_RIGHT} y={PANEL_Y}
        width={PANEL_WIDTH} height={PANEL_HEIGHT} rx={PANEL_RX}
        fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
        stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)"
        strokeWidth="1.5"
      />
      <text
        x={ITEM_X_RIGHT} y={LABEL_Y}
        fontFamily="var(--do-font-heading)" fontWeight="700"
        fontSize={LABEL_FONT_SIZE} fill="var(--do-cerulean)"
        letterSpacing="0.06em"
      >
        {afterLabel}
      </text>
      <g
        fontFamily="var(--do-font-body)" fontSize={ITEM_FONT_SIZE}
        fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)"
      >
        {after.map((item, i) => (
          <text key={i} x={ITEM_X_RIGHT} y={ITEM_START_Y + i * ITEM_SPACING}>
            <tspan fill="var(--do-cerulean)" fontWeight="700">&#x2713;</tspan>
            <tspan dx="14">{item}</tspan>
          </text>
        ))}
      </g>

      {/* ── connector arrow ───────────────────────────────── */}
      <line
        x1={PANEL_X_LEFT + PANEL_WIDTH + 20} y1={ARROW_Y}
        x2={PANEL_X_RIGHT - 20} y2={ARROW_Y}
        stroke="var(--do-cerulean)" strokeWidth="2"
      />
      <polygon
        points={`${PANEL_X_RIGHT - 22},${ARROW_Y - 4} ${PANEL_X_RIGHT - 10},${ARROW_Y} ${PANEL_X_RIGHT - 22},${ARROW_Y + 4}`}
        fill="var(--do-amber)"
      />
    </>
  );
}
