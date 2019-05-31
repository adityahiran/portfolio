export default {
    BY_NAME: ({ name: one }, { name: two }) => {
        if (one.toLowerCase() < two.toLowerCase()) return 1;
        else if (one.toLowerCase() > two.toLowerCase()) return -1;
        return 0;
    }
}