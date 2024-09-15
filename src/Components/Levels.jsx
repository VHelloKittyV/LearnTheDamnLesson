import PropTypes from "prop-types";
import "./Levels.css";

export default function Levels({
  lessonCount,
  handleChangeLevel,
  easy,
  normal,
  hard,
}) {
  return (
    <div className="levels">
      <input
      className="radio"
        type="radio"
        name="level"
        id="easy"
        value={easy}
        checked={lessonCount === easy}
        onChange={handleChangeLevel}
      />
      <label htmlFor="easy">easy</label>

      <input
      className="radio"
        type="radio"
        name="level"
        id="normal"
        value={normal}
        checked={lessonCount === normal}
        onChange={handleChangeLevel}
      />
      <label htmlFor="normal">normal</label>

      <input
      className="radio"
        type="radio"
        name="level"
        id="hard"
        value={hard}
        checked={lessonCount === hard}
        onChange={handleChangeLevel}
      />
      <label htmlFor="hard">hard</label>
    </div>
  );
}

Levels.propTypes = {
  lessonCount: PropTypes.number.isRequired,
  handleChangeLevel: PropTypes.func.isRequired,
  easy: PropTypes.number.isRequired,
  normal: PropTypes.number.isRequired,
  hard: PropTypes.number.isRequired,
};
