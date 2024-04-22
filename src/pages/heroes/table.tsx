"use client";
import React, { useState, useEffect } from "react";

import axios from "axios";
import toast from "react-hot-toast";

interface Hero {
  id: string;
  domain: number;
  country: string;
  compliance: string;
  city: string;
}

interface SearchCriteria {
  compliance?: string;
  domain?: string;
  city?: string;
  country?: string;
  limit?: number;
  page?: number;
}
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/zendesk/search");
  const data = await response.json();

  return {
    props: {
      initialHeroes: data,
    },
  };
}

const Page = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({});

  useEffect(() => {
    const fetchHeroes = async () => {
      const params = new URLSearchParams(searchCriteria as any);
      const response = await fetch(
        `http://localhost:3000/zendesk/search?${params.toString()}`
      );
      const data = await response.json();
      if (data && Array.isArray(data.items)) {
        setHeroes(data.items);
      } else {
        console.error("Unexpected data format:", data);
      }
    };

    fetchHeroes();
  }, [searchCriteria]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchCriteria as any);
    const response = await fetch(
      `http://localhost:3000/zendesk/search?${params.toString()}`
    );
    const data = await response.json();
    setHeroes(data);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("¿Estás seguro de que deseas borrar este Registro?")) {
      try {
        await axios.delete(`http://localhost:3000/zendesk/${id}`);
        setHeroes(heroes.filter((zendesk) => zendesk.id !== id));
        toast.success("Deleted!");
      } catch (error) {
        console.error(error);
        toast.error("Can't access, check logs!");
      }
    }
  };

  return (
    <div className="">
      <div className="flex justify-center h-20">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-center w-2/3"
        >
          <div className="w-1/4 px-2">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 px-3"
            >
              Search by Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Search by Country"
              onChange={handleSearchChange}
              className="my-6 focus:ring-red-500 focus:border-red-500 block w-2/3 shadow-sm text-sm border-gray-300 rounded-md px-3 h-10"
            />
          </div>
          <div className="w-1/4 px-2">
            <label
              htmlFor="domain"
              className="block text-sm font-medium text-gray-700 px-3"
            >
              Search by Domain
            </label>
            <input
              type="text"
              name="domain"
              id="domain"
              placeholder="Search by Domain"
              onChange={handleSearchChange}
              className="my-6 focus:ring-red-500 focus:border-red-500 block w-2/3 shadow-sm text-sm border-gray-300 rounded-md px-3 h-10"
            />
          </div>

          <div className="w-1/4 px-2">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700 px-3"
            >
              Search by Compliance
            </label>
            <input
              type="text"
              name="compliance"
              id="compliance"
              placeholder="Search by Compliance"
              onChange={handleSearchChange}
              className="my-6 focus:ring-red-500 focus:border-red-500 block w-2/3 shadow-sm text-sm border-gray-300 rounded-md px-3 h-10"
            />
          </div>

          <div className="w-1/4 px-2">
            <label
              htmlFor="alignment_id"
              className="block text-sm font-medium text-gray-700 px-3"
            >
              Search by City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Search by City"
              onChange={handleSearchChange}
              className="my-6 focus:ring-red-500 focus:border-red-500 block w-2/3 shadow-sm text-sm border-gray-300 rounded-md px-3 h-10"
            />
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex justify-center py-2 px-4 mb-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Search
          </button>
        </form>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {/* Add the same classes to each th */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Domain
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Country
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Compliance
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              City
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
            {/* ... other th elements */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {heroes.map((zendesk) => (
            <tr key={zendesk.id}>
              {/* Add the same classes to each td */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {zendesk.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {zendesk.domain}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {zendesk.country}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {zendesk.compliance}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {zendesk.city}
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href={`/heroes/${zendesk.id}`}>Editar</a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button onClick={() => handleDelete(zendesk.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
