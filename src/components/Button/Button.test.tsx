import {
    describe,
    expect,
    test
} from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";

describe('Button test', () => {
    render(<Button>Button</Button>)

    test("should show button all the time", () => {

        expect(screen.getByText(/Button/i)).toBeInTheDocument();
    })
})