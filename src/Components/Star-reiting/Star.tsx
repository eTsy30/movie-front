interface IStar {
  isStarColor: boolean
  onMouseEnter: React.MouseEventHandler<HTMLDivElement> | undefined
  onMouseLeave: React.MouseEventHandler<HTMLDivElement> | undefined
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

export const Star = ({
  isStarColor,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: IStar) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    {isStarColor ? (
      <i className="fa-solid fa-star" style={{ color: 'gold', fontSize: 34 }} />
    ) : (
      <i
        className="fa-regular fa-star"
        style={{ color: 'gold', fontSize: 34 }}
      />
    )}
  </div>
)
