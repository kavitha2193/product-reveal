import { Persona } from './demoData';

interface Props {
  value: Persona;
  onChange: (p: Persona) => void;
}

const PersonaSelector = ({ value, onChange }: Props) => {
  return (
    <div className="flex justify-end ">
  <select
    value={value}
    onChange={(e) => onChange(e.target.value as Persona)}
    className="p-2 rounded-xl text-sm font-medium text-gray-800
               bg-white bg-opacity-20 border border-gray-300 backdrop-blur-sm
               hover:bg-opacity-30 transition focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
  >
    <option value="all">All Features</option>
    <option value="coe">CoE Centric</option>
    <option value="it-head">IT Head</option>
    <option value="registrar">Registrar</option>
  </select>
</div>
  );
};

export default PersonaSelector;
