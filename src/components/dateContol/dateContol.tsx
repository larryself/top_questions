import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { Button, Container, DatePickerStyles } from "./style";

type Props = {
	date: Date;
	setDate: (value: Date) => void;
	minDate: Date;
	dateFormat: string;
};

export const DateControl = React.memo(
	({ date, setDate, minDate, dateFormat }: Props) => {
		const [currentDate, setCurrentDate] = useState<Date>(date);

		const handlePicker = (value: Date | undefined) => {
			if (value) {
				setCurrentDate(value);
			}
		};
		return (
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setDate(currentDate);
				}}
			>
				<Container>
					<DatePicker
						format={dateFormat}
						onChange={handlePicker}
						value={currentDate}
						minDate={minDate}
						maxDate={new Date()}
						locale={"ru-Ru"}
					/>
					<DatePickerStyles />
					{currentDate.toDateString() !== date.toDateString() && (
						<Button type={"submit"}>Поиск</Button>
					)}
				</Container>
			</form>
		);
	}
);
