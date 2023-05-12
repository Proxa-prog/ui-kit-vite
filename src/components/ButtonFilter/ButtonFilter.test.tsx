import {
    describe,
    expect,
    test
} from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ButtonFilter from "./ButtonFilter.tsx";

describe('ButtonFilter test', () => {
    render(<ButtonFilter value={3} />)

    test("should show ButtonFilter with value = 3 all the time", () => {

        expect(screen.getByText(/3/i)).toBeInTheDocument();
    })
});