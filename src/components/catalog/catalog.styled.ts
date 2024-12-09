import styled from "styled-components";
import { tabletBreakpoint } from "@constants/styles";

export const CatalogWrapper = styled('section')(
    () =>
    ({
        padding: '0 16px',
    })
)

export const CatalogItems = styled('div')(
    () =>
    ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',

        [`@media (max-width: ${tabletBreakpoint})`]: {
            padding: '0 1.55rem',
        }
    })
)