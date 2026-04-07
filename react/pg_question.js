import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
    const [data, setData] = useState([]);
    console.log("datadata", data?.length);
    const [activePage, setActivePage] = useState(1);

    const pageSize = 10;

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            console.log("response", response);
            const jsondata = await response.json();
            setData(jsondata);
            console.log("jsondata", jsondata);
        } catch (error) {
            console.error("error:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const totalPageCount = Math.ceil(data.length / pageSize);
    const startIndex = activePage - 1;
    const endIndex = startIndex + pageSize;
    let pagedata = data.slice(startIndex, endIndex);

    const handleNext = () => {
        setActivePage((prev) => {
            return prev + 1;
        });
    };

    const handlePrev = () => {
        if (activePage > 0) {
            setActivePage((prev) => {
                return prev - 1;
            });
        }
    };

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <ul>
                {pagedata.map((obj, index) => {
                    return (
                        <li
                            key={index}
                            style={{
                                color: index >= Math.floor(pageSize / 2) ? "red" : "blue",
                            }}
                        >
                            {obj.title}
                        </li>
                    );
                })}
            </ul>
            <button
                onClick={() => {
                    handleNext();
                }}
            >
                next
            </button>
            <button
                onClick={() => {
                    handlePrev();
                }}
            >
                prev
            </button>
        </div>
    );
}
// Prachay Group 