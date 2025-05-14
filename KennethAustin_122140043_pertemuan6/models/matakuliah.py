from sqlalchemy import Column, Integer, String
from .meta import Base

class Matakuliah(Base):
    __tablename__ = 'matakuliah'
    id = Column(Integer, primary_key=True)
    kode_mk = Column(String, nullable=False, unique=True)
    nama_mk = Column(String, nullable=False)
    sks = Column(Integer, nullable=False)
    semester = Column(Integer, nullable=False)