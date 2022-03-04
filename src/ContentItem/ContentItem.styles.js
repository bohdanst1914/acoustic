import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    title: {
        textAlign: "center",
        margin: 0,
        fontSize: 35,
        fontWeight: "bold"
    },
    info: {
        display: "flex",
        justifyContent: "space-between"
    },
    author: {
        fontSize: 18,
        '& span': {
            fontSize: 24,
            fonFamily: 'cursive',
            fontWeight: "bold",
        }
    },
    container: {
        fontFamily: "Arial",
        width: '900px',
        margin: '50px auto'
    },
    leadImage: {
        width: '100%'
    }
}));
