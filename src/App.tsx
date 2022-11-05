import { Button, FormControl, FormLabel, Heading, Input, Stack, Table, TableContainer } from "@chakra-ui/react";
import { ChangeEvent, FC, MouseEvent, useCallback, useState } from "react";

const App: FC = () => {
    const [points, setPoints] = useState<number[]>([1, 2, 3]);
    const [pointStr, setPointStr] = useState<string>("");
    const handleChangePoints = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPointStr(e.target.value);
    }, []);
    const [koefStudent, setKoefStudent] = useState<number>(1);
    const handleChangeKoef = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setKoefStudent(+e.target.value);
    }, []);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleProcessPoints = (e: MouseEvent<HTMLButtonElement>) => {
        setPoints(pointStr.split(" ").map((item) => Number(item)));
        setIsOpen(true);
    };
    return (
        <div>
            <div>
                <header>
                    <Heading as={"h1"}>Обработка результатов прямых измерений</Heading>
                    <Stack gap={2}>
                        <FormControl isRequired>
                            <FormLabel>Введите значения через пробел</FormLabel>
                            <Input value={pointStr} placeholder="Введите значения" onChange={handleChangePoints} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Введите коэф Стьюдента</FormLabel>
                            <Input
                                type="number"
                                value={koefStudent}
                                placeholder="Введите коэф Стьюдента"
                                onChange={handleChangeKoef}
                            />
                        </FormControl>
                        <Button onClick={handleProcessPoints}>Произвести обработку</Button>
                    </Stack>
                </header>
                {isOpen && (
                    <main>
                        <Heading as={"h2"}>Результат расчёта</Heading>
                        <Stack>
                            <Stack>
                                <Heading as="h3">1. Математическое ожидание</Heading>
                                <div>
                                    μ=({points.map()})/({points.length})
                                </div>
                            </Stack>
                            <Stack>
                                <Heading as="h3">2. Дисперсия</Heading>
                                <div></div>
                            </Stack>
                            <Stack>
                                <Heading as="h3">3. Среднеквадратичное отклонение </Heading>
                            </Stack>
                            <Stack>
                                <TableContainer>
                                    <Table variant={"striped"}></Table>
                                </TableContainer>
                            </Stack>
                        </Stack>
                    </main>
                )}
            </div>
        </div>
    );
};

export default App;
