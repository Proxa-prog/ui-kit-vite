import {
    describe,
    expect,
    test
} from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ButtonIcon from "./ButtonIcon.tsx";

describe('ButtonIcon test', () => {
    render(<ButtonIcon />)

    test("should show ButtonForm all the time", () => {

        expect(screen.getByRole('button')).toBeInTheDocument();
    })
});