import math


def dtw(a, b):
    if not a or not b:
        return {"distance": 0.0, "path_length": 0}
    n = len(a)
    m = len(b)
    dp = [[math.inf] * (m + 1) for _ in range(n + 1)]
    dp[0][0] = 0

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            cost = abs(a[i - 1] - b[j - 1])
            dp[i][j] = cost + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])

    i, j = n, m
    path = 0
    while i > 0 and j > 0:
        path += 1
        options = [(dp[i - 1][j], i - 1, j), (dp[i][j - 1], i, j - 1), (dp[i - 1][j - 1], i - 1, j - 1)]
        _, i, j = min(options, key=lambda item: item[0])

    return {"distance": round(dp[n][m], 4), "path_length": path}
