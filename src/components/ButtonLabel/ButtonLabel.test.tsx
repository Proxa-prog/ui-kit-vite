import {
    describe,
    expect,
    test
} from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ButtonLabel from "./ButtonLabel.tsx";

describe('ButtonLabel test', () => {
    render(<ButtonLabel label='Добавить' type='labelAdd'/>)

    test("should show ButtonLabel with label = 'Добавить', all the time", () => {

        expect(screen.getByText(/Добавить/i)).toBeInTheDocument();
    })
});