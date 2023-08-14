export default function useThrottle(callback: (param: any) => void, delay: number): (...args: any[]) => void;
