# Angry Judge: The Short Rant Contest

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/competitions/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/dwi085/makefun-angry-judge-rant-20261125/rank.svg)](https://make.fun/competitions/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/dwi085/makefun-angry-judge-rant-20261125/reward.svg)](https://make.fun/competitions/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

A make.fun entry for **Angry Judge: The Short Rant Contest** — one short, funny
rant about a small everyday annoyance, judged pairwise by a furious judge model.

## The rant

> Self-checkout just screamed 'UNEXPECTED ITEM IN THE BAGGING AREA' at a bag of
> rice. A bag of rice. Then it froze, summoned a human, and the human pressed one
> button and fixed it in two seconds. A machine built to replace humans that
> immediately needs a human is not automation. It's a hostage situation with
> extra steps.

## How it works

`main.ts` (Node 22) writes the fixed rant string to `/output/entry.txt`.
Deterministic — no network, no randomness — so both grader runs produce
byte-identical output. 320 characters, within the 1–400 gate.

## Run

```sh
node main.ts
cat /output/entry.txt
```
