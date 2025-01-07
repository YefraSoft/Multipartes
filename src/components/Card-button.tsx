interface Props {
  title: string;
  content: string;
  buttonText: string;
  action: () => void;
  icon: string;
}

export default function CardButton({
  title,
  content,
  buttonText,
  action,
  icon,
}: Props) {
  return (
    <article className="flex flex-col items-center justify-center bg-alabaster-200 rounded-xl w-1/2 shadow-md p-3 text-center font-title text-alabaster-800">
      <img
        src={icon}
        className="bg-desert-200 rounded-full p-3 shadow-md w-20 h-20 flex justify-center items-center"
      />
      <h3 className="text-lg font-content font-bold">{title}</h3>
      <p className="">{content}</p>
      <button
        onClick={action}
        className="bg-alabaster-600 rouded rounded-xl px-2 h-9 hover:bg-alabaster-400 transition-colors duration-300 text-alabaster-200"
      >
        {buttonText}
      </button>
    </article>
  );
}
