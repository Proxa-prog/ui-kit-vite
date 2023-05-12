import {
    describe,
    expect,
    test
} from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Counter from "./Counter.tsx";

describe('ButtonLabel test', () => {
    render(<Counter value={88} />)

    test("should show Counter with label = 'Добавить', all the time", () => {

        expect(screen.getByText(/88/i)).toBeInTheDocument();
    })
});