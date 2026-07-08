import { calculeMc } from "./../utils/calculations";

const Header = ({ periods }) => {
  return (
    <header className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4 text-left">
      <div>
        <h1 className="text-10xl font-bold">UFCG Index</h1>
        <p className="text-base text-zinc-200">
          Pelo menos aqui você tem controle do seu índice acadêmico.
        </p>
      </div>

      <div>
        <h2 className="text-sm text-zinc-200 tracking-wider">MC Geral:</h2>
        <span className="text-2xl font-bold text-blue-400">
          {calculeMc(periods).toFixed(2)}
        </span>
      </div>
    </header>
  );
};

export default Header;
