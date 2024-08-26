import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Genres{
    id: number;
    name: string;	
}
interface FetchGenresResponse {
    count: number;
    results: Genres[];
}

const useGenres = () => useData<Genres>('/genres')
export default useGenres;