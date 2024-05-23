export function gtag() {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  } else {
    const dataLayer: IArguments[] = [];
    const window = {
      dataLayer,
    };
    window.dataLayer.push(arguments);
  }
}
