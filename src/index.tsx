import { StrictMode } from "react";
import { DesktopSize } from "./screens/DesktopSize/DesktopSize";

import { ViteReactSSG } from 'vite-react-ssg/single-page';

export const createRoot = ViteReactSSG(

    <DesktopSize />

);