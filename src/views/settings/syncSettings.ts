import { getSyncStorage, setSyncStorage } from "../../lib/db/chromeSyncStorage";
import { exportStore, importStore } from "../../db/action";

export async function syncSettingsToChrome() {
    const settings = JSON.parse(exportStore());
    console.log("Syncing settings to Chrome:", settings);
    await setSyncStorage("tabliss_settings", settings);
}

export async function loadSettingsFromChrome() {
    const settings = await getSyncStorage("tabliss_settings");
    console.log("Loaded settings from Chrome:", settings);
    if (settings) {
        importStore(settings);
        window.location.reload();
    }
}
