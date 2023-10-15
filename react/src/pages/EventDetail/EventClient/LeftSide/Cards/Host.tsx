import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import LineContainer from "src/components/LineContainer";

interface HostProps {
  hostName?: string;
  minGuests?: number;
  maxGuests?: number;
  hostProfilePhoto?: string;
  hostId?: number;
}

const Host: React.FC<HostProps> = ({
  hostName,
  minGuests,
  maxGuests,
  hostProfilePhoto,
  hostId,
}) => {
  const navigate = useNavigate();

  return (
    <LineContainer>
      <section className="flex flex-col gap-3">
        <div className="mb-2">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[13pt] font-bold">
                hosted by {hostName}
              </span>

              <span>
                From {minGuests} to {maxGuests} people joining
              </span>
            </div>

            <div
              onClick={() => navigate(`/profile/${hostId}`)}
              className="cursor-pointer flex flex-col items-center gap-1"
            >
              <span>
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={hostProfilePhoto}
                />
              </span>
              <div className="flex flex-row items-center gap-1">
                <span className="text-[10pt] font-bold">See Profile</span>
                <span>
                  <FiExternalLink />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LineContainer>
  );
};

export default Host;
