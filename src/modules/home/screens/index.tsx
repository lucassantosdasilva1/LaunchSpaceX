import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, FlatList, NativeMethods, Text } from "react-native";
import { Container, List, Label } from "./styles";

import Card from "../../../shared/components/card";
import EmptyAnimation from "../../../shared/components/emptyAnimation";
import Search from "../../../shared/components/search";

import v3DTO from "../../../core/dto/v3DTO";
import { RootState } from "../../../core/store";
import { save } from "../../../core/store/slices";
import { getPaginateData } from "../../../shared/service/api";

const Home = () => {
  const data = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  const inputRef = useRef<NativeMethods>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const offset = 8;
  const filteredData = data.filter((item : v3DTO) => item.mission_name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await getPaginateData(page);
      let spreadData : v3DTO[] = [...data, ...result.data];
      dispatch(save(spreadData));
      setIsLoading(false);
    })();
  }, [page]);

  return (
    <Container onPress={() => inputRef.current.blur()}>
      <Search
        ref={inputRef}
        placeholder="busca avançada"
        onChange={setSearch}
        defaultValue={search}
        clear={() => setSearch("")}
      />

      {search.length > 0 && (
        <Label
          value={`${filteredData.length} ${
            filteredData.length > 1
              ? "resultados encontrados"
              : "resultado encontrado"
          }`}
        />
      )}

      <List
        data={search.length > 0 ? filteredData : data}
        onEndReachedThreshold={0.5}
        onEndReached={() => setPage(page + offset)}
        keyExtractor={(item: v3DTO) => item.flight_number}
        renderItem={({ item }: { item: v3DTO }) => <Card data={item} />}
        ListEmptyComponent={() => <EmptyAnimation />}
        ListFooterComponent={() => <ActivityIndicator style={{ padding: 5}} color="blue"/>}
        
      />
    </Container>
  );
};

export default Home;
