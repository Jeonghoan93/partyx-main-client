import ClientOnly from "src/components/ClientOnly";
import EmptyState from "src/components/EmptyState";

import { getCurrentUser } from "src/services/auth";
import { getEvents } from "src/services/event";

import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const events = await getEvents({ userId: currentUser.id });

  if (events.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you have no properties."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient events={events} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
