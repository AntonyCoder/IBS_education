import React, { useState } from "react";
import Catalog from "./components/catalog/catalog";
import Header from "./components/header/header";

const App = () => {
    const [filteredItems, setFilteredItems] = useState([]); // Отфильтрованные товары

    return (
        <>
            <Header onFilter={setFilteredItems} />
            <Catalog items={filteredItems} />
        </>
    );
};

export default App;