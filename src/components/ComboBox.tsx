import React, { useState } from "react";

interface AutoModelos {
  marca: string;
  modelos: string[];
}

interface Props {
  isAdvacent?: boolean;
}
const modelos: AutoModelos[] = [
  {
    marca: "Toyota",
    modelos: ["Corolla", "Camry", "Hilux", "RAV4"],
  },
  {
    marca: "Ford",
    modelos: [
      "Fiesta",
      "Fiesta | std",
      "Fiesta | auto",
      "Fiesta | 2pts",
      "Focus",
      "Mustang",
      "Explorer",
    ],
  },
  {
    marca: "Chevrolet",
    modelos: ["Aveo", "Cruze", "Malibu", "Tracker"],
  },
  {
    marca: "BMW",
    modelos: ["Serie 3", "Serie 5", "X5", "X3"],
  },
  {
    marca: "Audi",
    modelos: ["A3", "A4", "Q5", "Q7"],
  },
];

interface section {
  name: string;
}

const categories: section[] = [
  { name: "Accesorios" },
  { name: "Interiores" },
  { name: "Partes de colición" },
  { name: "Partes mecanicas" },
  { name: "Partes electricas" },
];

export default function SelectMenu({ isAdvacent = false }: Props) {
  const currentYear = new Date().getFullYear();
  const startYear = 1980;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => currentYear - index
  );
  const [marcaSeleccionada, setMarcaSeleccionada] = useState<string>("");
  const [modelosDisponibles, setModelosDisponibles] = useState<string[]>([]);

  const handleMarcaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const marca = e.target.value;
    setMarcaSeleccionada(marca);

    const marcaEncontrada = modelos.find((item) => item.marca === marca);
    if (marcaEncontrada) setModelosDisponibles(marcaEncontrada.modelos);
    else setModelosDisponibles([]);
  };

  return (
    <section className="flex w-full space-x-3 py-4 font-title text-sm">
      <select
        id="marca"
        name="marca"
        value={marcaSeleccionada}
        onChange={handleMarcaChange}
        className={`${
          isAdvacent ? "w1/4" : "w-1/3"
        } h-7 bg-alabaster-100 ring-orange-300 border border-alabaster-300 rounded-md shadow-inner text-center 
           focus:outline-none focus:ring-1  focus:shadow-md focus:shadow-orange-200 focus:border-alabaster-100 transition-colors duration-200`}
      >
        <option value="">Marca</option>
        {modelos.map((item) => (
          <option
            key={item.marca}
            value={item.marca}
            className="text-base font-content"
          >
            {item.marca}
          </option>
        ))}
      </select>
      <select
        id="modelo"
        name="modelo"
        className={`${
          isAdvacent ? "w1/4" : "w-1/3"
        } h-7 bg-alabaster-100 ring-orange-300 border border-alabaster-300 rounded-md shadow-inner text-center 
           focus:outline-none focus:ring-1  focus:shadow-md focus:shadow-orange-200 focus:border-alabaster-100 transition-colors duration-200`}
      >
        <option value="">Modelo</option>
        {modelosDisponibles.map((modelo, index) => (
          <option key={index} value={modelo} className="text-base font-content">
            {modelo}
          </option>
        ))}
      </select>
      <select
        name="year"
        id="year"
        className={`${
          isAdvacent ? "w1/4" : "w-1/3"
        } h-7 bg-alabaster-100 ring-orange-300 border border-alabaster-300 rounded-md shadow-inner text-center 
           focus:outline-none focus:ring-1  focus:shadow-md focus:shadow-orange-200 focus:border-alabaster-100 transition-colors duration-200`}
      >
        <option value="">Año</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      {isAdvacent && (
        <select
          id="modelo"
          name="modelo"
          className={`${
            isAdvacent ? "w1/4" : "w-1/3"
          } h-7 bg-alabaster-100 ring-orange-300 border border-alabaster-300 rounded-md shadow-inner text-center 
             focus:outline-none focus:ring-1  focus:shadow-md focus:shadow-orange-200 focus:border-alabaster-100 transition-colors duration-200`}
        >
          <option value="">Categorias</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      )}
    </section>
  );
}
