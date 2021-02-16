type BoundaryType = {
    lowerBoundary: number,
    upperBoundary: number
    colorCode: string
}

const colorIndicator = (value: number) => {
    const rules: BoundaryType[] = [
        { lowerBoundary: 0, upperBoundary: 30, colorCode: '#006f07' },
        { lowerBoundary: 31, upperBoundary: 60, colorCode: '#B4D57F' },
        { lowerBoundary: 61, upperBoundary: 99, colorCode: '#CDDC81' },
        { lowerBoundary: 100, upperBoundary: 130, colorCode: '#FFEB84' },
        { lowerBoundary: 131, upperBoundary: 160, colorCode: '#FECB7E' },
        { lowerBoundary: 161, upperBoundary: 190, colorCode: '#FCB179' },
        { lowerBoundary: 191, upperBoundary: 220, colorCode: '#FB9E76' },
        { lowerBoundary: 221, upperBoundary: 250, colorCode: '#FA8781' },
        { lowerBoundary: 251, upperBoundary: 280, colorCode: '#F9776E' },
        { lowerBoundary: 281, upperBoundary: 310, colorCode: '#F8696B' }
    ]

    let result = rules.find(x => value >= x.lowerBoundary && value <= x.upperBoundary)
    if (typeof result === 'undefined') {
        return '#F8696B'
    }
    return result.colorCode
}

export { colorIndicator }