/* Euclid's algorithms */
export function greatestCommonDivisor(options: { m: number; n: number }) {
  const r: number = options.m % options.n;
  let result = options.n;

  if (r != 0) {
    const m = options.n;
    const n = r;

    result = greatestCommonDivisor({ m, n });
  }

  return result;
}

export function greatestCommonDivisorOptimized(options: {
  m: number;
  n: number;
}) {
  let m;
  let n;

  // We ensure m will be major than n
  if (options.m < options.n) {
    m = options.n;
    n = options.m;
  } else {
    m = options.m;
    n = options.n;
  }

  const r: number = m % n;
  let result = n;

  if (r != 0) {
    m = n;
    n = r;

    result = greatestCommonDivisor({ m, n });
  }

  return result;
}
