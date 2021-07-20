function getRoute(tickets: string[][]): string {
    let result: string = "";
    let next: string = "";
    const ticketsGrouped: string[][] = tickets.reduce(
        (group: string[][], ticket: string[]) => {
            group[0].push(ticket[0]);
            group[1].push(ticket[1]);
            return group;
        },
        [[], []]
    );

    const firstOrigin: string = ticketsGrouped[0].filter((origin: string) => !ticketsGrouped[1].includes(origin))[0];
    result += firstOrigin;
    next = firstOrigin;

    for (let i = 0; i < ticketsGrouped[0].length; i++) {
        const index = ticketsGrouped[0].indexOf(next);
        next = ticketsGrouped[1][index];
        result += `, ${next}`;
    }

    return result;
}
