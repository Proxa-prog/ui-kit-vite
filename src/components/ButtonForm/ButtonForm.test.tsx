import {
    describe,
    expect,
    test
} from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ButtonForm from "./ButtonForm.tsx";

describe('ButtonForm test', () => {
    render(<ButtonForm title='Заголовок' />)

    test("should show ButtonForm with 'title = Заголовок', all the time", () => {

        expect(screen.getByText(/Заголовок/i)).toBeInTheDocument();
    })
});