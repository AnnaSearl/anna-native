import { StyleSheet } from 'react-native';

const styles = StyleSheet.create<any>({
    content: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    tint: {
        height: 10,
        backgroundColor: '#ECF5FF',
        shadowColor: '#1467FF',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 0 },
        marginVertical: 10,
        borderRadius: 10,
        position: 'absolute',
    },
    fill: {
        width: '100%',
        height: 10,
        shadowColor: '#1467FF',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: { width: 1, height: 1 },
        marginVertical: 10,
        borderRadius: 10,
        // backgroundColor: '#1467FF',
    },
    rocketImg: {
        width: 24,
        height: 24,
        marginLeft: -5,
    },
});

export default styles;
