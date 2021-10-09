import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../Form/Form";

describe("Form", () => {
    it("renders", () => {
        render(<Form onSubmit={jest.fn()} />);
    });

    it("has a label, input and button", () => {
        render(<Form onSubmit={jest.fn()} />);

        expect(
            screen.getByRole("textbox", {
                name: /search whois with an ip or domain\./i,
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("button", {
                name: /submit/i,
            })
        );
    });

    it("should call handleSubmit", () => {
        const onSubmit = jest.fn();
        render(<Form onSubmit={onSubmit} />);

        userEvent.click(screen.getByText(/submit/i));

        expect(onSubmit).toHaveBeenCalled();
    });

    it("should call handleSubmit with correct input", () => {
        const IPorDomain = "www.johnirle.com";
        const onSubmit = jest.fn();
        render(<Form onSubmit={onSubmit} />);

        userEvent.type(
            screen.getByRole("textbox", {
                name: /search whois with an ip or domain\./i,
            }),
            IPorDomain
        );
        userEvent.click(screen.getByText(/submit/i));

        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(IPorDomain);
    });
});
