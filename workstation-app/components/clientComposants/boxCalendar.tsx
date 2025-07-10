/**
 * But:     Calendrier
 * Auteur:  Ken D. Cacciabue
 * Date:    07.07.2025
 */

// définit le composant comme un composant qui fonctionnera côté client
"use client"

/**
 * Importations:
 *      @js-temporal/polyfill:  Module qui s'implifie la gestion des dates https://www.npmjs.com/package/@js-temporal/polyfill
 *          Temporal:   Global Object par lequel se passe la gestion des dates https://tc39.es/proposal-temporal/docs/
 *      React:  Library React https://react.dev/
 *          useEffect:  React hook qui permet de déclancher certains événement chaque refresh et changement d'états https://react.dev/reference/react/useEffect
 *          useState:   React Hook qui permet de gurder des variable au delà des refresh des composants https://react.dev/reference/react/useState
 *      MonthYear:  Composant qui affiche l'année et le mois
 *      CalendarMenu:   Menu qui permet de changer le mois grâce à certains boutons
 *      WeekNames:  Nom de la semain représenté par la colonne
 *      Month:  Composant montrant le mois en cours
 *      Objects: Interface des objets utilisé
 *          IMonth: Interface pour le mois
 *          Iweek:  Interface pour la semaine
 *          IDay:   Interface pour le jour
 */
import { Temporal } from "@js-temporal/polyfill";
import React, { useEffect, useState } from "react";
import MonthYear from "./monthYear";
import CalendarMenu from "./calendarMenu";
import WeekNames from "./weekNames";
import Month from "./boxMonth";
import { IDay, IMonth, IWeek } from "@/util/interface/object";
import Week from "./boxWeek";
import Day from "./boxDay";

/**
 * Calendrier global
 * 
 * Composants:
 * @returns MonthYear
 * @returns CalendarMenu
 * @returns WeekNames
 * @returns Month
 */
function Calendar() {
    /**
     * useStates:
     *      currentDayTime: La date de l'instant en Temporal.PlainDateTime https://tc39.es/proposal-temporal/docs/plaindatetime.html
     *      month:  Le mois afficher à l'écrant
     *      year:   L'année affichée à l'écrant
     *      monthCalendar:  l'object du mois afficher
     */
    const [currentDayTime] = useState(Temporal.Now.plainDateTimeISO())
    const [month, setMonth] = useState(currentDayTime.month);
    const [year, setYear] = useState(currentDayTime.year);

    const [mode, setMode] = useState("MonthCalendar");

    const [monthCalendar, setMonthCalendar] = useState<IMonth>({
        value: Temporal.Now.plainDateTimeISO(),
        weeks: []
    });
    const [weekCalendar, setWeekCalendar] = useState<IWeek>({
        value: Temporal.Now.plainDateTimeISO(),
        days: []
    });
    const [dayCalendar, setDayCalendar] = useState<IDay>({
        value: Temporal.Now.plainDateTimeISO(),
        hours: []
    });


    /**
     * useEffect:
     *      Calcule du mois afficher et construictions du clendrier
     */
    useEffect(() => {

        /**
         * déclarations variables et constantes
         */

        // nombre de jour dans un mois visuelle de 5 semaines
        const fiveWeeks = 35;

        // premier jour du mois afficher en Temporal.PlainDateTimesuivant l'année et le mois affichés
        const startOfVisualMonth = Temporal.PlainDateTime.from({ year, month, day: 1 });

        // nombre de jour dans le mois en cours
        const monthLength = startOfVisualMonth.daysInMonth;

        // premier jour du mois en partant de 0
        const dayOfWeekMonthStartedOn = startOfVisualMonth.dayOfWeek - 1;

        // nombre de semaines dans le mois
        let weeksNb;

        // instant du moment
        let dayTime = currentDayTime

        // test pour savoir si le mois a 5 ou 6 semaines
        if (dayOfWeekMonthStartedOn + monthLength > fiveWeeks) {
            weeksNb = 6
        } else {
            weeksNb = 5
        }

        // Mois remplis
        const monthCalendar: IMonth = fillMonthCalendar(weeksNb)


        /**
         * Remplis le mois du nombres de semaines en parametre
         * @param weeksNb 
         * @returns monthCalendar: IMonth
         */
        function fillMonthCalendar(weeksNb: number) {
            const monthCalendar: IMonth = {
                value: dayTime,
                weeks: []
            }

            for (let i = 0; i < weeksNb; i++) {
                monthCalendar.weeks.push(
                    fillWeekCalendar(i)
                )
            }

            return monthCalendar
        }

        /**
         * Remplis une semaine suivant son emplacement dans le mois
         * @param nbOfTheWeek 
         * @returns weekCalendar: IWeek
         */
        function fillWeekCalendar(nbOfTheWeek: number) {

            const weekCalendar: IWeek = {
                value: dayTime,
                days: []
            }

            for (let i = 0; i < 7; i++) {
                weekCalendar.days.push(
                    fillDayCalendar(startOfVisualMonth.add({
                        days: (i + (nbOfTheWeek * 7)) - dayOfWeekMonthStartedOn,
                    }))
                )
            }

            return weekCalendar
        }

        /**
         * Remplis une journée d'heure
         * @param dayDate 
         * @returns dayCalendar
         */
        function fillDayCalendar(dayDate: Temporal.PlainDateTime) {
            dayTime = dayDate
            const dayCalendar: IDay = {
                value: dayDate,
                hours: []
            }

            for (let i = 0; i < 24; i++) {
                dayTime = dayTime.withPlainTime({
                    hour: i
                })
                dayCalendar.hours.push(
                    {
                        value: dayTime
                    }
                )
            }

            return dayCalendar
        }

        // set le useState du clendrier
        setMonthCalendar(monthCalendar);

    }, [year, month, currentDayTime]);

    let activateMode

    if (mode === "MonthCalendar") {
        activateMode = <Month
            monthCalendar={monthCalendar}
            currentDayTime={currentDayTime}
            setMode={setMode}
            setWeekCalendar={setWeekCalendar}
        />
    } else if (mode === "WeekCalendar") {
        activateMode = <Week
            weekCalendar={weekCalendar}
            currentDayTime={currentDayTime}
        />
    } else if (mode === "DayCalendar") {
        activateMode = <Day
            displayedDay={dayCalendar}
            currentDayTime={currentDayTime}
        />
    }
    

    return (
        <div className={`flex-grow flex flex-col h-100`}>
            <div className="flex justify-between">
                <MonthYear
                    month={month}
                    year={year}
                />
                <CalendarMenu
                    month={month}
                    year={year}
                    setMonth={setMonth}
                    setYear={setYear}
                />
            </div>


            <WeekNames />

            {activateMode}
        </div>
    );
}
export default Calendar;