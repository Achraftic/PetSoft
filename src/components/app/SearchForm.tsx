'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get the current search parameters
  const [query, setQuery] = useState("");
  const parmas=useParams();
  console.log(parmas)
  
  

  const handleSubmitSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentParams = new URLSearchParams(searchParams.toString());


    if (query) {
      currentParams.set('s', query);
    } else {
      currentParams.delete('s');
    }
    router.push(`/dashboard/?${currentParams.toString()}`);
    setQuery(currentParams.get('s') as string); 

    
  };
 
  return (
    <form onSubmit={handleSubmitSearchForm}>
      <Input
        defaultValue={query}
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        className="bg-focus/50 rounded-md p-2 text-light text-xs w-full h-full focus:border-1 border-white border-none"
        placeholder="Search pets"
      />
    </form>
  );
}
