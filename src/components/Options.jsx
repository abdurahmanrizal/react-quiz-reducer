function Options({question, dispatch, answer}) {
  const hasAnswer = answer !== null;
  console.log(question);
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({type: "newAnswer", payload: index})}
          disabled={hasAnswer}
          key={option.id}>
          {option}
        </button>
      ))}
    </div>
  );
}
export default Options;
