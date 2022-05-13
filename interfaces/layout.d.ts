import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import {OrganizerLayout, UserLayout} from '../components/layout'

type PageWithMainLayoutType = NextPage & { layout: typeof OrganizerLayout }
type PageWithPostLayoutType = NextPage & { layout: typeof UserLayout }
export type PageWithLayoutType = PageWithOrganizerLayoutType | PageWithUserLayoutType

export type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}