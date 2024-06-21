"use client";
import { useMutation, useQuery } from "@blitzjs/rpc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import deleteListing from "../mutations/deleteListing";
import getListing from "../queries/getListing";

export const Listing = ({ listingId }: { listingId: number }) => {
  const router = useRouter();
  const [deleteListingMutation] = useMutation(deleteListing);
  const [listing] = useQuery(getListing, { id: listingId });

  return (
    <>
      <div>
        <h1>Project {listing.id}</h1>
        <pre>{JSON.stringify(listing, null, 2)}</pre>

        <Link href={`/listings/${listing.id}/edit`}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteListingMutation({ id: listing.id });
              router.push("/listings");
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
