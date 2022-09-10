from typing import Optional

from app.models.domain.rwmodel import RWModel
from app.resources import strings


class Profile(RWModel):
    username: str
    bio: str = ""
    image: Optional[str] = strings.DEFAULT_IMAGE
    following: bool = False
